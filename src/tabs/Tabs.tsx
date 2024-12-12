import { Children, isValidElement, PropsWithChildren } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  Tabs as TabsRoot,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/ui/tabs";
import { cn } from "@/utils";

export interface TabDefinition {
  value: string;
  titleTrigger: string;
  title?: string;
  description?: string;
}

interface ClassNames {
  root?: string;
  tabsList?: string;
  tabsTrigger?: string;
  card?: string;
  cardHeader?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardContent?: string;
}

type TabsProps = PropsWithChildren<{
  defaultTab: string;
  tabs: TabDefinition[];
  classNames?: ClassNames;
  variant?: "default" | "button";
  onValueChange?: (value: string) => void;
}>;

function Tabs({
  defaultTab,
  tabs,
  classNames = {},
  children,
  variant,
  onValueChange,
}: Readonly<TabsProps>) {
  return (
    <TabsRoot
      className={classNames.root}
      defaultValue={defaultTab}
      onValueChange={onValueChange}
    >
      <TabsList className={cn("flex w-max gap-2", classNames.tabsList)}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            className={classNames.tabsTrigger}
            value={tab.value}
            variant={variant}
          >
            {tab.titleTrigger}
          </TabsTrigger>
        ))}
      </TabsList>
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === TabsContent) {
          const tab = tabs.find((t) => t.value === child.props.value);

          return (
            <TabsContent key={child.props.value} value={child.props.value}>
              <Card className={classNames.card}>
                {(tab?.title || tab?.description) && (
                  <CardHeader className={classNames.cardHeader}>
                    {tab?.title && (
                      <CardTitle className={classNames.cardTitle}>
                        {tab.title}
                      </CardTitle>
                    )}
                    {tab?.description && (
                      <CardDescription className={classNames.cardDescription}>
                        {tab.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                )}

                <CardContent
                  className={cn("space-y-2", classNames.cardContent)}
                >
                  {child}
                </CardContent>
              </Card>
            </TabsContent>
          );
        }

        return null;
      })}
    </TabsRoot>
  );
}

export { Tabs, TabsContent };
