// Define the user type based on your Strapi model
export interface User {
    id: number;
    attributes: {
      username: string;
      email: string;
      confirmed: boolean;
    };
  }

