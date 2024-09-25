const backendBaseUrl = 'http://localhost:8000';

const post_call_module = async (payload, path) => {
  try {
  const res = await fetch(`${backendBaseUrl}/api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok'); // Handle response errors
  }

  const res_data = res.json();

  return res_data;
} catch (error) {
  // Handle any errors that occurred during the fetch
  console.error('Error fetching authors:', error);
}
};

export { post_call_module };



const get_call_module = async (path) => {
  try {
  const res = await fetch(`${backendBaseUrl}/api/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res_data = res.json();

  return res_data;
} catch (error) {
  // Handle any errors that occurred during the fetch
  console.error('Error fetching authors:', error);
}
};

export { get_call_module };




const put_call_module = async (payload, path) => {
  try {
  const res = await fetch(`${backendBaseUrl}/api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok'); // Handle response errors
  }

  const res_data = res.json();

  return res_data;
} catch (error) {
  // Handle any errors that occurred during the fetch
  console.error('Error fetching authors:', error);
}
};

export { put_call_module };



const delete_call_module = async (path) => {
  try {
  const res = await fetch(`${backendBaseUrl}/api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok'); // Handle response errors
  }

  const res_data = res.json();

  return res_data;
} catch (error) {
  // Handle any errors that occurred during the fetch
  console.error('Error fetching authors:', error);
}
};

export { delete_call_module };

