import { NextPage } from 'next';

export type PageRoles = {
	isOnlyAdmin?: boolean;
	isOnlyUser?: boolean;
};

export type NextAuthPage = NextPage & PageRoles;

export type ComponentAuthFields = {
	children?: React.ReactNode;
	Component: PageRoles;
};
