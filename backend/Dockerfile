# Use official lightweight Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Install system dependencies (if needed by sentence-transformers/torch)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (for caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source code into container
COPY . .

# Default command (run your rss_extraction_with_chroma_storing.py)
CMD ["python", "rss_extraction_with_chroma_storing.py"]
