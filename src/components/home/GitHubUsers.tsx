import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, AvatarImage } from "../devUI/ui/avatar";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../devUI/ui/tooltip";
import P from "../customUI/P";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  followers: number;
  html_url: string;
}

const GitHubUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userNames = ["aritra69", "cyberserk7", "pritamgit2002"];
        const promises = userNames.map((username) =>
          axios.get<User>(`https://api.github.com/users/${username}`)
        );

        const usersData = await Promise.all(promises);
        setUsers(usersData.map((user) => user.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-3 items-center">
      <P>Created by</P>
      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
      <div className="flex items-center gap-2">
        {users.map((user) => (
          <Link href={user.html_url} target="_blank" key={user.id}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar>
                    <AvatarImage
                      src={user.avatar_url}
                      alt={`${user.login} avatar`}
                    />
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>@{user.login}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GitHubUsers;
