import React from "react";
import { BoardArea, BoardBind, BoardTitle, StackContent, StackTitle } from "./styles/ProfileStackStyle";

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