const deletingCommaInLastLine = <T>(arr: T[], string: string, idx: number) =>
	idx !== arr.length - 1 ? (string += `,`) : string;

export default deletingCommaInLastLine;
