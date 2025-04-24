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

        <CareerTitle>라온시큐어 (24.02 ~ )</CareerTitle>

        <CareerContent>
          {/* - API 문서화 및 테스트 <br />
          - 고객사 장애 및 이슈 대응 <br />
          - 자사 신기술 개발 참여 (캡쳐방지 및 워터마크) <br />
          - 자사 기술 지원 샘플 앱 및 데모 앱 개발(Android) <br />
          - 200 여 곳 고객사 전용 앱 수정 및 빌드(Android. iOS) <br />
          - 대시보드 화면 구현 <br />
          - 공통 컴포넌트 설계 <br />
          - 리액트 / 스프링 빌드 환경 구성 <br />
          - 기존 Ext.js 기반 관리자 페이지 UI/UX 전면 개편 <br />
          - 고객사 맞춤형 옵션 기능 개발 및 적용 <br />
          - 웹 상 가상 키보드 렌더링 및 키보드 스타일, 기능 즉시 반영 <br />
          - 기존 앱 빌드 방식을 개선하기 위해 mTranskey JSON 옵션 실시간 시각화
          도구 자체 개발 <br />
          - 교육 시장 내 MDM 도입을 위한 요구사항 분석 및 기술 환경 조사 <br />
          - React 기반 초기 프로젝트 구조 설계 및 세팅 <br /> */}
          - MDM 자사 보안 솔루션 앱 개발 및 유지 보수 <br />
          - 취약점 진단 현황 대시보드 <br />
          - 자사 MDM 관리자 페이지 UI / UX 개선 <br />
          - TouchEn mTranskey 커스터마이징 툴 (React 기반 시각화 도구 개발){" "}
          <br />
          - 교육 시장 MDM 리액트 환경 구성 <br />
        </CareerContent>
      </BoardArea>
    </>
  );
};

export default ProfileCareer;
