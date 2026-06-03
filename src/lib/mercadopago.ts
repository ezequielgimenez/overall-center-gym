// SDK de Mercado Pago
import { MercadoPagoConfig, Payment } from "mercadopago";

// Agrega credenciales
export const clientMP = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function getPaymentById(id: string) {
  const payment = new Payment(clientMP);
  return payment.get({ id });
}

export type WebhokPayload = {
  action: string;
  api_version: string;
  data: {
    id: string;
  };
  date_created: string;
  id: number;
  live_mode: boolean;
  type: string;
  user_id: string;
};
