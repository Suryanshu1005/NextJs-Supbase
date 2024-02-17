import {supabaseRouteHandler} from "@/utils/supabase";

export const getUserData = async (cookie: any) => {
  const supabase = supabaseRouteHandler(cookie);
  const {data, error} = await supabase.auth.getUser();

  return {data, error};
};
