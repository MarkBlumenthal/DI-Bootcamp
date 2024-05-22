import React from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => JSX.Element;
}

export function List<T>({ items, renderItem }: ListProps<T>): JSX.Element {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}
