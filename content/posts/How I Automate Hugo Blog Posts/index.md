+++
title = 'How I Automate Hugo Blog Posts'
date = 2024-10-16T16:54:32
draft = false
+++

I recently setup this Hugo blog and I thought I would share how I created a simple workflow to create a new blog post.

## Alfred workflow

When I type `nbp {title}` into the Alfred command bar it runs the following script

```bash
query=$1
dateTime=$(date +"%Y-%m-%dT%H:%M:%S")  # ISO 8601 format
# Create directory and navigate into it
cd ~/programming/blog/mdrupp.com/content/posts && mkdir $1 && cd $1
# Create and populate index.md with frontmatter
cat <<EOF > index.md
+++
title = '$query'
date = $dateTime
draft = true
+++
EOF
```

This creates the folder `{title}` changes directory into it, and echo's the front matter into a file called index.md. Using a folder structure instead of a file structure lets me easily embed images alongside the text.
