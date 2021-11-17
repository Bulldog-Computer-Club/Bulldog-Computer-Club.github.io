---
title: What is Linux?
sidebar_position: 2
---

Depending on your knowledge of computers and operating systems you might or might not have heard of Linux before, in this first post in my series on Linux and Unix I will be discussing the history behind Linux and what it really is, as well as demonstrating some different Linux-based operating systems that you can try out for yourself before we begin the official walkthrough.

Linux is an operating system like Windows or MacOS, but unlike those two systems Linux is (almost) completely Open Source, meaning that the code that makes it up is available publicly and for free. This means that in general, you get much higher security and customizability in Linux than other operating systems. And unlike other operating systems, a Linux system is completly under your control, away from government and corporation survailance and influence, and never forces you to give away your information or update your system when you choose not to. For these reasons Linux is used everywhere ranging from smartphones, to routers, to supercomputers and mars landers.

Below: Image of the Ingenuity mars helicopter, running a custom version of Linux.
![Picture of mars helicopter](https://spacenews.com/wp-content/uploads/2021/04/ingenuity-onsurface.jpg)

Linux *technically* isn't a full operating system. It's a operating system [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)), meaning it's just the part of the operating system that manages drivers, mounting of the filesystem, ELF binaries, etc; which of course isn't of much use without extra programs. That's why Linux is usually coupled by a set of utilities called [GNU](http://gnu.org), which form the rest of the base system. This is why you will often hear Linux refered to as "GNU/Linux", because Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS. 

But GNU/Linux only includes enough of the system for a classic command line OS, similar to [MSDOS](https://en.wikipedia.org/wiki/DOS), and provides no real way of installing programs not included in the base operating system; this is where "distributions" come in. A "Distribution", sometimes abreviated to "distro" is an operating system built on top of GNU/Linux that adds a [package manager](https://en.wikipedia.org/wiki/Package_manager) and usually a graphical user interface called a desktop environment. Package managers are the primary way of installing software in Linux operating systems, and we will go over their usage in the following posts.

## The history behind Linux and Unix


### Popular GNU/Linux distributions

Beginner distros are highlighted in bold. Distros that do not have a picture don't include a desktop environment (GUI) by default.

| Distro       | Difficulty Level     | Notes |
|--------------|----------------------|-------|
| **Ubuntu** (including kubuntu, xubuntu, lubuntu)       | Beginner             | Huge amount of documentation available, easy to install non-free (proprietary) programs with the help of the snap store. Best software and hardware support. ![Image of an Ubuntu desktop](https://cdn.mos.cms.futurecdn.net/jrsZ9uSwU4sXYnkSCmxDSP.png)|
| **KDE Neon**      | Beginner                     | Sleek and customizable, based on Ubuntu. Faster updates ![Image of a KDE Neon desktop](https://upload.wikimedia.org/wikipedia/commons/3/38/KDE_neon_5.22_with_KDE_Plasma_5.22.4-desktop_view.png) |
| **OpenSuse**      | Beginner                     | Fast updates, stable, extremely customizable, easy to install. Includes a suit of GUI tools for managing system level settings that would usually require commandline knowledge. ![Unage of an OpenSUSE desktop](https://i.ytimg.com/vi/b2nF9k4_FOo/maxresdefault.jpg)|
| Fedora      | Intermediate                     | Fast updates, stable. Sometimes difficult to install proprietary software. ![Image of a Fedora desktop](https://149366088.v2.pressablecdn.com/wp-content/uploads/2021/03/gnome-40-overview.jpg)|
| Debian      | Intermediate                     | Very slow updates but minimal. Requires you to do some configuration yourself. |
| Arch      | Advanced                     | Amazingly bleeding edge updates. Requires you to do most things manually using the command line. Huge amount of documentation hosted on [The Arch Wiki](https://wiki.archlinux.org/). Includes a lot of advanced tools that help in installing a variety of software. |
| Void      | Advanced                     | Fast updates, stable. More minimal than other distributions.  |
| Gentoo      | Expert                     | Source-based distribution that requires you to built your system completely from source, allowing for nearly infinite customization. Don't attempt installing this unless you are very familiar with Linux. |

### For the extra brave

Here are some distributions that I definetly don't recommend to anyone but the most advanced users.


| Distro       | Notes |
|--------------|-------|
| KISS Linux   | *Extremely* minimal and simple, the base system consisting of less than 20 packages and running on as little as 100 megabytes of ram |
| CRUX         | Super minimalistic DIY distro |
| NixOS        | An advanced operating system with a next-generation package manager |


### Other UNIXes

Here are some other UNIX-like operating systems that are not Linux but are worth taking a look at

| OS       | Notes |
|----------|-------|
| OpenBSD  | An operating system focused on Minimalism and Security. My personal favorite OS ;) |
| NetBSD   | An operating system focused on portability and being able to run on toasters |
| FreeBSD  | A "kitchen sink" operating system |
