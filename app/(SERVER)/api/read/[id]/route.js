import { CONNECTDB } from "@/lib/mongodb";
import { NoteC } from "@/models/NoteCollection";

export async function GET(_, { params }) {
  const { id } = await params;
  try {
    CONNECTDB();
    const dataToFind = await NoteC.findById(id);
    if (!dataToFind) {
      return Response.json(
        { message: `Note with the ID: ${id} does not exist` },
        { status: 404 }
      );
    }
    return Response.json(
      { message: "Note Retrieved", data: dataToFind },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "server error", error }, { status: 500 });
  }
}
