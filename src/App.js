const client_id = "86lqf2lme6rpmf";
const state = "ajsdnsak12";
const redirect_uri = "http://localhost:3000";
const scope = ["r_liteprofile", "r_emailaddress"].join("%20");

function App() {
  return (
    <div>
      <a
        href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=${scope}`}
      >
        Log in
      </a>
    </div>
  );
}

export default App;
