import { CONNECTDB } from "@/lib/mongodb";
import { NoteC } from "@/models/NoteCollection";

export async function DELETE(_, { params }) {
  const { id } = await params;
  try {
    CONNECTDB();
    const NoteTodDelete = await NoteC.findByIdAndDelete(id);
    if (!NoteTodDelete) {
      return Response.json(
        { message: `Note with the ID: ${id} does not exist` },
        { status: 404 }
      );
    }
    return Response.json(
      { message: "Note Deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "server error", error }, { status: 500 });
  }
}
