import type { Meta, StoryObj } from '@storybook/react';
import contactListItem from '@/components/contactListItem/contactListItem';
import { Student } from '@/types/student';

const meta: Meta<typeof contactListItem> = {
    component: contactListItem,
    title: 'Contact List Item',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof contactListItem>;

const mockStudent: Student = {
    id: 1,
    name: 'John Doe',
    email: 'johnDoe@gmail.com',
    attendance: true
}

export const StandardVariant: Story = {
    name: 'Standard Variant',
    args: {
        student: mockStudent
    },
};


export const EmailVariant: Story = {
    args: {
        student: mockStudent,
        variant: 'email'
    },
};

export const StandardVariantEnabled: Story = {
    name: 'Standard Variant Enabled',
    args: {
        student: mockStudent,
        isEnabled: true
    },
};

export const EmailVariantEnabled: Story = {
    name: 'Email Variant Enabled',
    args: {
        student: mockStudent,
        variant: 'email',
        isEnabled: true
    },
};



export const NoThumbnail: Story = {
    args: {
        student: mockStudent,
        variant: 'email'
    },
};

export const CustomThumbnail: Story = {
    args: {
        student: { ...mockStudent, thumbnail: 'https://randomuser.me/api/portraits/men/72.jpg' },
        variant: 'email'
    },
};

