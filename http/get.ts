import {supabaseComponent, supabaseRouteHandler} from "@/utils/supabase";

export const getUserData = async (cookie: any) => {
  const supabaseRoute = supabaseRouteHandler(cookie);
  const {data, error} = await supabaseRoute.auth.getUser();
  console.log("123456", data);
  return {data, error};
};
