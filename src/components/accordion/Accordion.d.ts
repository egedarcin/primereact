import React = require("react");

interface AccordionTabProps {
    header?: string;
    disabled?: boolean;
    headerStyle?: object;
    headerClassName?: string;
    contentStyle?: object;
    contentClassName?: string;
}

export class AccordionTab extends React.Component<AccordionTabProps,any> {}

interface AccordionProps {
    id?: string;
    activeIndex?: any;
    className?: string;
    style?: object;
    multiple?: boolean;
    onTabOpen?(e: {originalEvent: Event, index: number}): void;
    onTabClose?(e: {originalEvent: Event, index: number}): void;
    onTabChange?(e: {originalEvent: Event, index: number}): void;
}

export class Accordion extends React.Component<AccordionProps,any> {}