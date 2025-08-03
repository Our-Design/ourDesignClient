export interface Lead {
  _id: string;
  customerName: string;
  customerMobile: number;
  address: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
  };
  budget: number;
  status: string;
  isVerified: boolean;
  assignedTo: null;
  propertyType: string;
  description: string;
  propertySize: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  display_name?: string;
  created_at: string;
  bytes: number;
  format: string;
}

export interface CloudinaryResponse {
  resources: CloudinaryImage[];
  total_count: number;
}

// Blog types
export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  featured?: boolean;
}
