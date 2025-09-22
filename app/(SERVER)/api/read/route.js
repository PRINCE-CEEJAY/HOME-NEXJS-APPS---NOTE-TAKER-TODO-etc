import { CONNECTDB } from "@/lib/mongodb";
import { NoteC } from "@/models/NoteCollection";

export async function GET() {
  try {
    CONNECTDB();
    const dataToFind = await NoteC.find();
    return Response.json(
      { message: "Notes Retrieved", data: dataToFind },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "server error", error }, { status: 500 });
  }
}
