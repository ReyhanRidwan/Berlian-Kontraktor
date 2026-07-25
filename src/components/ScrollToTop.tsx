/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

interface ScrollToTopProps {
  currentTab: string;
}

export default function ScrollToTop({ currentTab }: ScrollToTopProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [currentTab]);

  return null;
}
