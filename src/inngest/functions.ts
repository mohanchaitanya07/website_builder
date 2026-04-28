import { openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const coding_agent = createAgent({
      name: "coding_agent",
      system:
        "you are an expert english trainer and corrects senetences and give correct sentence",
      model: openai({ model: "gpt-5" }),
    });

    const { output } = await coding_agent.run(
      `Code Snippet: ${event.data.value}`,
    );

    return { output };
    7;
  },
);
