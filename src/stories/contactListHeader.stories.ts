import type { Meta, StoryObj } from '@storybook/react';
import ListHeader from '@/components/list-header/ListHeader';

const meta: Meta<typeof ListHeader> = {
    component: ListHeader,
    title: 'List Header',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListHeader>;


export const Standard: Story = {
    name: 'Standard',
    args: {
        label: "Attended",

    },
};

export const onCloseSection: Story = {
    name: 'Close Section',
    args: {
        label: "Attended",
        isSectionVisible: false,
    }
};