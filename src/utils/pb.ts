import PocketBase from "pocketbase";
import { env } from "@/env/server.mjs";
import { PagesRecord } from "@/@types/pocketbase-types";

const pb = new PocketBase(env.PB_API);

async function getPages() {
  try {
    const data: PagesRecord[] = await pb.collection("pages").getFullList();
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export { pb, getPages };
