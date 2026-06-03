import { getPaymentById, WebhokPayload } from "@/src/lib/mercadopago";
import { prisma } from "@/src/lib/prisma";

export async function POST(request: Request) {
  try {
    const body: WebhokPayload = await request.json();

    if (body.type === "payment") {
      const mpPayment = await getPaymentById(body.data.id);

      if (mpPayment.status === "approved") {
        const idUser = Number(mpPayment.external_reference);

        if (isNaN(idUser)) {
          return Response.json(
            { error: "Invalid external reference" },
            { status: 400 },
          );
        }

        await prisma.inscripcion.update({
          where: {
            id: idUser,
          },
          data: {
            estado: "pagado",
            paymentId: String(mpPayment.id),
            paidAt: mpPayment.date_approved
              ? new Date(mpPayment.date_approved)
              : new Date(),
          },
        });
      }
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
