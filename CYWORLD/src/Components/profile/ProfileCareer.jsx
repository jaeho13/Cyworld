import React from "react";
import {
  BoardArea,
  BoardTitle,
  CareerContent,
  CareerTitle,
} from "./styles/ProfileCareerStyle";

const ProfileCareer = (props) => {
  return (
    <>
      <BoardTitle>{props.title}</BoardTitle>

      <BoardArea>
        <CareerTitle>인졀미 (23.07 ~ 24.02)</CareerTitle>

        <CareerContent>
          - 앱 화면 개발(Flutter) <br />
          - 관리자 페이지 개발(React) <br />
          - 사용자 경험 개선을 위한 테스트 및 버그 리포트 작성 <br />
          - PostgreSQL을 이용한 게임 데이터 밸런스 작업 진행 <br />
        </CareerContent>

        <CareerTitle>라온시큐어 (24.02 ~ 25.05)</CareerTitle>

        <CareerContent>
          - MDM 자사 보안 솔루션 앱 개발 및 유지 보수 <br />
          - 취약점 진단 현황 대시보드 <br />
          - 자사 MDM 관리자 페이지 UI / UX 개선 <br />- TouchEn mTranskey
          커스터마이징 툴 (React 기반 시각화 도구 개발) <br />
          - 교육 시장 MDM 리액트 환경 구성 <br />
        </CareerContent>
      </BoardArea>
    </>
  );
};

export default ProfileCareer;
