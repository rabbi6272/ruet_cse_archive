import { google } from "googleapis";
import fs from "fs";
import path from "path";

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

export async function createDriveAuthClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();

  let auth;

  if (clientEmail && privateKey) {
    auth = new google.auth.GoogleAuth({
      credentials: { client_email: clientEmail, private_key: privateKey },
      scopes: SCOPES,
      forceRefreshOnFailure: true,
    });
  } else {
    const keyFilePath = path.join(process.cwd(), "credentials.json");
    if (!fs.existsSync(keyFilePath)) {
      throw new Error("Google Drive credentials not found");
    }
    auth = new google.auth.GoogleAuth({ keyFile: keyFilePath, scopes: SCOPES });
  }

  return auth.getClient();
}

export async function createDriveClient() {
  const authClient = await createDriveAuthClient();
  return google.drive({ version: "v3", auth: authClient });
}
