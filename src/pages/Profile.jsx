import { useParams } from "react-router-dom";

export default function Profile() {
  const { userId } = useParams();
  return (
    <div className="p-4">Profile Page for User ID: {userId}</div>
  );
}
