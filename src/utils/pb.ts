import PocketBase from "pocketbase";
import { env } from "@/env/server.mjs";
import type { PagesRecord } from "@/@types/pocketbase-types";

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

async function getPageById(id: string) {
  try {
    const data: PagesRecord = await pb.collection("pages").getOne(id);
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

async function getPageBySlug(slug: string) {
  try {
    const data: PagesRecord = await pb
      .collection("pages")
      .getFirstListItem('slug="' + slug + '"');
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

async function createPage(data: PagesRecord) {
  try {
    const res = await pb.collection("pages").create(data);
    return { data: res };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

async function updatePage(id: string, data: PagesRecord) {
  try {
    const res = await pb.collection("pages").update(id, data);
    return { data: res };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

async function getIdFromSlug(slug: string) {
  try {
    const res = await pb
      .collection("pages")
      .getFirstListItem('slug="' + slug + '"');
    return { data: res.id };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function uploadFile(file: File) {
  try {
    const res = await pb.collection("files").create(file);
    return { data: res };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function listFiles() {
  try {
    const res = await pb.collection("files").getFullList();
    return { data: res };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function getFile(id: string) {
  try {
    const res = await pb.collection("files").getOne(id);
    return { data: res };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export { pb, getPages, getPageById, getPageBySlug, createPage, updatePage, getIdFromSlug };
