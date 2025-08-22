---
title: Installation of LunarVim
published: 2024-04-23
description: Installation of LunarVim
tags: [LunarVim, Installation]
category: Learning
draft: false
---

I've been using LunarVim for some time. In the past, I've used a series of out-of-the-box Vim software such as Neovim (nvim) and SpaceVim. After comprehensive experience, I find that LunarVim runs smoothly and it's extremely convenient to add plugins.
However, the installation of LunarVim is indeed a bit troublesome. So I wrote this article to help you with the installation.

## Plugins Required for LunarVim

- Nvim v0.9.0+

- git

- make

- pip

- python

- npm, node

- cargo

- nerd font

- Optional: lazygit

Let's install them step by step.

## Nvim v0.9.0+

In most Ubuntu systems, you can't get the latest version of Nvim by using `apt-get install`. So here we adopt the method officially recommended on GitHub for direct installation.
Download the AppImage.

```bash
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
chmod u+x nvim.appimage
./nvim.appimage
```

The above commands will probably fail. **If they fail, on the basis of having run the above commands**, run the following commands:

```bash
./nvim.appimage --appimage-extract
./squashfs-root/AppRun --version
```

Create a symbolic link for Nvim. After executing the following code, the classic Nvim interface will appear, indicating that Nvim has been installed.

```bash
sudo mv squashfs-root /
sudo ln -s /squashfs-root/AppRun /usr/bin/nvim
nvim
```

![](https://s2.loli.net/2023/10/25/1PzAyZLQs8teqrX.png)

## git

Most Ubuntu systems come with git pre - installed. If not, use the following code to install it.

```bash
sudo apt-get install git
```

## pip + python

Pip is basically bundled with Python. So you can install both pip and Python by installing Anaconda.

```bash
cd ~
wget https://repo.anaconda.com/archive/Anaconda3-2023.09-0-Linux-x86_64.sh
bash Anaconda3-2023.09-0-Linux-x86_64.sh
```

![](https://s2.loli.net/2023/10/25/fy5WD476Uvhkrnz.png)
Press Enter.
![](https://s2.loli.net/2023/10/25/KjQqSP5LZnYOrGX.png)
Press the down arrow key twice on this interface.
When asked if you accept the license terms, enter `yes`.
![](https://s2.loli.net/2023/10/25/mTw2VXSJ9RypKYx.png)
Here you'll be asked if you want to change the installation path of Anaconda3. If not, just press Enter to proceed to the next step and the installation will be completed.

## npm + node

Npm and node are installed together. Here I choose the most convenient installation method using nvm.

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

After installation, you can view the available versions through `nvm ls-remote` and choose the latest one. Here I choose version 18.18.

```bash
nvm install v18.18.0
```

After execution, npm and node will be installed.

## cargo

Cargo can be installed directly using the following automated script.

```bash
curl https://sh.rustup.rs -sSf | sh
```

## Nerd font

Nerd Font is the key to whether various icons in LunarVim can be displayed correctly.
If you're a Windows user, you can directly go to the [Nerd Font](https://www.nerdfonts.com/font-downloads) official website to download and install the required Nerd font. It's recommended to choose `FiraCode`. After installation, connect to the server via Windows Terminal using SSH, and change the font to the Nerd Font you want to use in the settings.
![](https://s2.loli.net/2023/10/25/baEMcTGzYk2VyLI.png)
If you're an Ubuntu user, refer to the [recommended installation method](https://github.com/ronniedroid/getnf) provided by LunarVim.

## lazygit

After installing lazygit, you can quickly open lazygit in the LunarVim terminal by pressing the shortcut keys `<space><g><g>`.
If you don't know what lazygit is, refer to the author's [GitHub link](https://github.com/jesseduffield/lazygit).

```bash
Install lazygit. Note: This is only applicable to Ubuntu systems.
LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep -Po '"tag_name": "v\K[^"]*')
curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz"
tar xf lazygit.tar.gz lazygit
sudo install lazygit /usr/local/bin
```

## Official Installation of LunarVim

Use the installation method provided by the official directly.

```bash
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)
```

When asked during the process, enter `yes` for all questions.

Great! So far, you've installed LunarVim and can start using it.
If you can't start LunarVim directly in the bash using the `lvim` command, it might be because you haven't configured the environment variables properly. Refer to my configuration below (you'll get a prompt after installing lvim).
Note that you need to change `user` to your actual username.

```bash
export PATH="/home/user/.local/bin/:$PATH"
```

Also, to avoid the trouble of typing `lvim`, you can add the following to your `.bashrc` or `.zshrc` file.

```bash
alias vim=lvim
```

Map `vim` to `lvim`. Remember to run `source` to update.

## My Configuration File

Since `LunarVim` has achieved an excellent out-of-the-box experience, I haven't made many changes to my personal configuration. Mainly, I've set `jj` as the ESCAPE key and added some commonly used plugins.
Friends who are interested can fork and try it out~
https://github.com/QingYunA/lvim-conifg