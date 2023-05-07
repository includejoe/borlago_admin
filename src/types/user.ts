export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  momo_number?: string;
  gender: string;
  user_type: number | string;
  created_at: string;
  profile_photo?: string;
};
