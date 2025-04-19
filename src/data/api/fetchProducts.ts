import { supabase } from "../../supabaseClient";

export const fetchProducts = async () => {
  console.log("POKRECEM FETCH");
  const { data, error } = await supabase.from("products").select("*");

  console.log("Data iz Supabase", data);
  console.log("Greska ako psotoji", error);

  if (error) {
    console.log("Greska prilikom fetchovanja");
    throw error;
  }

  return data;
};
