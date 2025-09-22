import { CONNECTDB } from "@/lib/mongodb";
import { NoteC } from "@/models/NoteCollection";

export async function POST(request) {
  const userData = await request.json();
  try {
    CONNECTDB();
    const createdData = await NoteC.create(userData);
    return Response.json(
      { message: "Note created successfully", data: createdData },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "server error", error }, { status: 500 });
  }
}
