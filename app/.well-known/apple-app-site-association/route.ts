const body = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "96R74G8KFG.com.xogaapp.app",
        paths: [
          "/m/*",
          "/match/*",
          "/s/*",
          "/share/*",
          "/app/open",
          "/app/open/*",
          "/reset-password",
          "/reset-password/*",
          "/reset_password",
          "/reset_password/*"
        ]
      }
    ]
  }
};

export function GET() {
  return Response.json(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
