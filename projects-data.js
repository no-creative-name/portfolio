window.projectContent = {
  featuredProjects: [
    {
      title: "I turned repeated lending builds into a configurable platform",
      status: "Production, Multi-year use",
      role: "Primary Product Engineer",
      duration: "6 months",
      summary: "Used by a bank for several years, generating several thousand leads and becoming a foundation for later projects.",
      context: "After three to four similar lending applications, the repeated journey was clear: keep the core stable while making branding, wording, credit calculations, and client requirements configurable.",
      build: "I planned the modules and system boundaries and implemented most of the infrastructure, backend, and frontend. A state machine modeled each lending journey and generated its frontend wizard.",
      outcome: "One bank used the platform for several years and generated several thousand leads. Although no second client launched, the code became the foundation for more than three later projects.",
      learning: "The system was stable, but we abstracted ahead of market validation. Today I would deepen modularity only after observing several committed customers.",
      link: null
    },
    {
      title: "I added voice to a grounded AI assistant without sacrificing trust",
      status: "Closed beta, Active measurement",
      role: "Lead Developer",
      duration: "1 month",
      summary: "A cross-platform beta for several hundred users, with grounded responses beginning in under ten seconds.",
      context: "Voice needed to feel immediate, but it still had to use the product's slower retrieval and grounding pipeline so answers remained trustworthy.",
      build: "I owned the push-to-talk flow across React Native and FastAPI, integrating transcription, retrieval, and streamed speech. Users can interrupt at any time; a new recording cancels generation and queued playback.",
      outcome: "The closed beta serves several hundred users on iOS and Android. Grounded responses begin playing in under ten seconds, and adoption is being measured before further investment.",
      learning: "Latency was not the only goal. Preserving trust and making recording, waiting, playback, and cancellation predictable produced the better product trade-off.",
      link: null
    },
    {
      title: "I built an AI workspace that turned research into editable artifacts",
      status: "Internal product, Follow-up commissioned",
      role: "Lead Developer",
      duration: "2–3 months",
      summary: "An internal product that teams used long enough to commission a second development phase.",
      context: "Teams manually turned research and planning material into structured artifacts. Stakeholder interviews helped define how those inputs and outputs should connect in one workflow.",
      build: "As lead developer in a two-developer team, I worked across the React app, Python backend, authentication, file processing, transcription, and rich-text editing. Users could generate, refine, edit, and export artifacts.",
      outcome: "The product saw extended internal use, and feedback led the client to commission a follow-up. It is now being phased out as general-purpose AI platforms improve faster than its budget allows.",
      learning: "A standalone model interface is not a durable advantage. The stronger product would connect the tools teams already use and treat models as replaceable infrastructure.",
      link: null
    }
  ],
  otherProjects: [
    {
      title: "Visual PR Briefs",
      status: "Evolving prototype",
      summary: "An explorable alternative to increasingly long AI-generated pull-request summaries.",
      detail: "I identified the problem, discussed it with the team, and built a prototype that analyzes a pull request and presents its important behavioral changes, decisions, and relationships as a visual website. The approach is still evolving and has already been useful within the project team."
    },
    {
      title: "In-person Workshop Tool",
      status: "MVP tested in a live hackathon",
      summary: "One coherent flow for presenting, facilitating activities, voting, and documenting in-person workshops.",
      detail: "I recognized the problem, initiated and built an MVP with dedicated moderator, participant, and room views, and evaluated features such as dot voting in a real hackathon setting."
    },
    {
      title: "Evolving an AI prototype into a mobile product",
      status: "Product foundation delivered",
      summary: "A new mobile foundation and delivery process for an AI product whose existing stack no longer matched its direction.",
      detail: "I translated ambitious expectations into a staged technical strategy, evaluated the available technology options, planned the move from React and Capacitor to React Native and Expo, led key architectural decisions, and established end-to-end testing and a three-stage QA and release process."
    }
  ]
};
