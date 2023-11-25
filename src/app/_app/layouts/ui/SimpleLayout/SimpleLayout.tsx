import React, { FC, PropsWithChildren } from 'react';
import { Open_Sans as OpenSans } from 'next/font/google';
import clsx from 'clsx';

const inter = OpenSans({ weight: ['300', '400', '600', '800'], subsets: ['cyrillic', 'latin'] });

export const SimpleLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <body className={clsx(inter.className)}>
                <main>{children}</main>
            </body>
        </html>
    );
};
