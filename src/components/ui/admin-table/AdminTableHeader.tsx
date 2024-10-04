import { FC } from 'react';

interface IAdminTableHeader {
	items: string[];
}

const AdminTableHeader: FC<IAdminTableHeader> = ({ items }) => {
	return (
		<thead>
			<tr>
				{items.map((header, index) => (
					<th key={index}>{header}</th>
				))}
			</tr>
		</thead>
	);
};

export default AdminTableHeader;
