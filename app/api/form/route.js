import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection string. Replace with the credentials in the password protected pdf at root directory. This would typically go into a env file.
const uri =
  "mongodb+srv://<username>:<password>@cluster0.l15ni.mongodb.net/?retryWrites=true&w=majority";

export async function POST(request) {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    // Specify the database and collection
    const db = client.db("onlycoders");
    const collection = db.collection("users");

    const body = await request.json();
    const { email, password, confirmPassword } = body;

    // Validate email and passwords
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." });
    }
    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match." });
    }

    // Prepare the document to be inserted
    const doc = {
      email,
      password, // In a real-world scenario we would hash the password.
    };

    // Insert the document into the database
    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    return NextResponse.json({ message: "Successfully registered!" });
  } catch (error) {
    console.error("Error in /api/form:", error);
    return NextResponse.json({ error: "Internal server error" });
  } finally {
    // Close the client
    await client.close();
  }
}
