import Stripe from "./Stripe";
import { createIntent, responseIntent } from "./interfaces";

class Methods extends Stripe {
  constructor(stripeKey: string) {
    super(stripeKey);
  }

  async create(payload: createIntent): Promise<any> {
    try {
      const { client_secret, status, currency, amount, id }: responseIntent =
        await this.createIntent(payload);
      return { client_secret, currency, amount, status, id };
    } catch (error) {
      throw new Error(error);
    }
  }

  async retrieve(payload: any): Promise<any> {
    const { id, params, options } = payload;
    return this.fetchIntent(id, params, options);
  }

  async confirm(payload: any): Promise<any> {
    try {
      const { id, params, options } = payload;
      const data = await this.confirmIntent(id, params, options);
      if (data.status === "succeeded") return data;
      throw data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default Methods;
