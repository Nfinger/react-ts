import { DefaultParams, RouteComponentProps } from "wouter";

export interface ILink {
    text: string
    path: string
    icon: string,
    component?: React.ComponentType<RouteComponentProps<DefaultParams>> | undefined,
    notification: number
    sidebar: boolean,
    key: number
}