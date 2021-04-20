# Welcome to Project Cemetery

First of all, our condolences to your project. I know you had the best of intentions. Some projects were just meant to never see the light of day.

This repo collects projects to be displayed on the headstones at [projectcemetery.com](https://projectcemetery.com), which strives to provide a place to mourn our own losses and be inspired by others' failures.

## Submit your project

You can easily bury your own project to this cemetery. You just need to add a file and create a pull request.

Create the new file by clicking this link: https://github.com/jonsustar/projectcemetery/new/main/projects

Please name the file using only alphanumeric characters and hyphens. The extension should be `.md`.

And then use this template. Only the title and description are required. Copy and paste this when creating that new file.

```
---
title: 
live_url: 
epitaph: 
birth_year: 
death_year: 
contributors:
  - name: 
    github: 
    twitter: 
    website: 
  - name: 
    github: 
    twitter: 
    website: 
---
Description of your project, memories of the good times, technologies used, why things failed, etc.
```

Some further notes on the above fields:
- `live_url`: Only include a URL here if it's truly still working.
- `epitaph`: This is just a short sentence or phrase to memorialize the project. Short enough to fit on a gravestone.
- `contributors`: These are the actual owners/creators/founders of the project or website.
  - `name`: Their name or nickname or username.
  - `github`: Their Github username (without the @ prefix).
  - `twitter`: Their Twitter username (without the @ prefix).
  - `website`: The full URL to their personal or company website, including the `https://`. 

### Images

You can include images or screenshots that help explain your deceased project within your description. You can upload those images to `/images` in your branch, and include that in your pull request. *Please* prefix your images using the same filename of your project file. For example, the LyricLemur image is named `lyriclemur_logo.png` because its project file is named `lyriclemur.md`.

To reference the image within your description, it uses the usual markdown:

```
![Description of Image, or leave blank](/images/whatever.png)
```
