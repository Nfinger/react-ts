import { DefaultParams, RouteComponentProps } from "wouter";

export interface ILink {
    title?: string
    text?: string
    path: string
    icon?: Element,
    component?: React.ComponentType<RouteComponentProps<DefaultParams>> | undefined,
    notification?: number
    sidebar?: boolean,
}