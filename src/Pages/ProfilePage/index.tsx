import { useNavigate } from "react-router-dom";
import { refresh } from "../../components/api/refresh";

export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div>
      ProfilePage
      <button
        onClick={() => {
          refresh(navigate, null);
        }}
      >
        adadasdasadadasdas <br />
        adadasdasadadasdas <br />
        adadasdasadadasdas <br />
        adadasdasadadasdas <br />
        adadasdasadadasdas <br />
        adadasdasadadasdas <br />
        adadasdasadadasdas <br />
        adadasdasadadasdas <br />
        adadasdasadadasdas <br />
        adadasdasadadasdas <br />
      </button>
    </div>
  );
}
