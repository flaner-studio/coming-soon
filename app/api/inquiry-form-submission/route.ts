import axios from "axios";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello, world!" });
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO_OWNER = "flaner-studio";
const GITHUB_REPO_NAME = "inquiries";
const GITHUB_REPO_PATH = "inquiries";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const data = await request.json();
    console.log(data);
    // Create markdown content
    let markdownContent = `# Business Inquiry\n\n`;

    for (const [key, value] of Object.entries(data)) {
      markdownContent += `## ${key}\n${value}\n\n`;
    }

    // Generate a unique filename
    const timestamp = format(new Date(), "yyyy-MM-dd_HH-mm-ss");
    const filename = `inquiry_${data.name}_${timestamp}.md`;

    //save the file to github repo
    const githubApiUrl = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${GITHUB_REPO_PATH}/${filename}`;
    const encodedContent = Buffer.from(markdownContent).toString("base64");
    try {
      await axios.put(
        githubApiUrl,
        {
          message: `Add inquiry file ${filename}`,
          content: encodedContent,
        },
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error uploading file to github:", error);
      return NextResponse.json(
        { error: "Error Processing Inquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Form submitted successfully",
      filename,
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Error processing form submission" },
      { status: 500 }
    );
  }
}
