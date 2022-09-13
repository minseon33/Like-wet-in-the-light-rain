/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";
import { useState } from "react";

const Header = styled.div`
  border: 1px solid aqua;
  width: 80%;
  height: 150px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-beetween;
`;
const Profile = styled.div`
  border: 2px solid tomato;
  width: 150px;
  height: 150px;
`;
const UserName = styled.div`
  border: 2px solid green;
  width: 150px;
  height: 150px;
  background-color: tomato;
`;

const Button = styled.button`
  border: none;
  width: 50px;
  height: 20px;
  color: white;
  background-color: tomato;
  margin: 30px 0;
  cursor: pointer;
  border-radius: 5px;
`;

const Introduce = styled.textarea`
  background: white;
  color: black;
`;

const profileHeader = () => {
  const [intro, setIntro] = useState("");
  const handleIntro = (e) => {
    setIntro(e.target.value);
  };

  return (
    <Header>
      <Profile>프로필</Profile>
      <UserName>계정닉네임</UserName>
      <Introduce
        type="text"
        value={intro}
        onChange={handleIntro}
        placeholder={"자기소개"}
      />
      <Button>수정</Button>
    </Header>
  );
};

export default profileHeader;
