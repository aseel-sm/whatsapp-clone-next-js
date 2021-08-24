import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../utils/getRecipientEmail";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/server/router";

const Chat = ({ id, users }) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const enterChat = () => {
    console.log("enter");
    router.push(`/chat/${id}`);
  };
  const recipientEmail = getRecipientEmail(users, user);

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}

      <p>{recipientEmail}</p>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  :hover {
    background-color: #e9eaeb;
  }
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;
  margin: 5px;
  margin-right: 15px;

  :hover {
    opacity: 1;
  }
`;
