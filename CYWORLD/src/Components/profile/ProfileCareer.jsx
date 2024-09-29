import React from "react";
import { BoardArea, BoardTitle, CareerContent, CareerTitle } from "./styles/ProfileCareerStyle";

const ProfileCareer = (props) => {
    return (
        <>
            <BoardTitle>
                {props.title}
            </BoardTitle>

            <BoardArea>
                <CareerTitle>
                    인졀미 (23.07 ~ 24.02)
                </CareerTitle>

                <CareerContent>
                    - 앱 프론트 개발 및 관리자 페이지 개발 <br />
                    - PostgreSQL을 이용한 게임 데이터 밸런스 작업 진행 <br />
                    - 사용자 경험 개선을 위한 테스트 및 버그 리포트 작성 <br />
                </CareerContent>

                <CareerTitle>
                    라온시큐어 (24.02 ~ )
                </CareerTitle>
                <CareerContent>
                    - 어플리케이션 빌드 및 테스트 <br />
                    - 샘플 앱 개선 및 데모 앱 개발 <br />
                    - 관리자 페이지 화면 ui 개선 <br />
                    {/* - 장애 대응 <br />
                    - 관리자 페이지 리액트 라이브러리로 마이그레이션 <br /> */}
                </CareerContent>

            </BoardArea>
        </>
    )
}

export default ProfileCareer;