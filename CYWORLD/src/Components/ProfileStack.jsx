import React from "react";
import styled from "styled-components"

const ProfileStack = (props) => {
    return (
        <>
            <BoardTitle>
                {props.title}
            </BoardTitle>

            <BoardArea>
                <BoardBind>
                    <StackTitle>Front-End</StackTitle>
                    <StackContent>
                        - JavaScript <br />
                        - React, Styled-Components <br />
                    </StackContent>

                    <StackTitle>Tool</StackTitle>
                    <StackContent>
                        - Dbeaver <br />
                        - Sourcetree <br />
                        - Figma Zeplin <br />
                    </StackContent>
                </BoardBind>

                <BoardBind>
                    <StackTitle>Experience</StackTitle>
                    <StackContent>
                        - DB <br />
                        - Flutter <br />
                        - Android <br />
                    </StackContent>

                    <StackTitle>Etc.</StackTitle>
                    <StackContent>
                        - Github Notion <br />
                        - Slack Discord <br />
                        - MsOffice Hwp <br />
                    </StackContent>
                </BoardBind>
            </BoardArea>
        </>
    )
}

export default ProfileStack;

const BoardTitle = styled.div`
    width: 97%;
    height: 3vh;
    margin-top: 1vh;
    color: #3B87AB;
    font-weight: bold;
    font-size: 1.5rem;
    padding-left: 3%;
    display: flex;
    align-items: center;
`

const BoardArea = styled.div`
    width: 93%;
    height: 30vh;
    min-height: 290px;
    border: 2px solid #d4d4d4;
    border-radius: 16px;
    background-color: white;
    margin-top: 1vh;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1vh;
    display: flex;
    flex-direction: row;
`

const BoardBind = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const StackTitle = styled.div`
    width: 100%;
    height: 3.5vh;
    min-height: 33px;
    color: #3B87AB;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
`

const StackContent = styled.div`
    width: 100%;
    height: 10vh;
    min-height: 95px;
    font-size: 1.2rem;
    overflow: auto;
    overflow-x: hidden;
    white-space: pre-wrap;
`