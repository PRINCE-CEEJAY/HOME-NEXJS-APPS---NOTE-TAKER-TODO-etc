import { CONNECTDB } from "@/lib/mongodb";
import { NoteC } from "@/models/NoteCollection";

export async function PUT(request, { params }) {
  const userData = await request.json();
  const { id } = await params;
  try {
    CONNECTDB();
    const updatedNote = await NoteC.findByIdAndUpdate(id, userData, {
      new: true,
    });
    if (!updatedNote) {
      return Response.json(
        { message: `Note with the ID: ${id} does not exist` },
        { status: 404 }
      );
    }
    return Response.json(
      { message: "Note Updated Successfully", data: updatedNote },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "server error", error }, { status: 500 });
  }
}
