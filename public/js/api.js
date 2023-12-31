export async function getVisits() {
  const response = await fetch(`/api/visits`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function getTreatments() {
  const response = await fetch(`/api/treatments`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function getDepartments() {
  const response = await fetch(`/api/emergency-departments`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function getPhysicians() {
  const response = await fetch(`/api/physicians`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function getHospitalRegions() {
  const response = await fetch(`/api/hospital-regions`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function updateVisit(data) {
  const response = await fetch(`/api/visits/${data.ed_visit_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function insertVisit(data) {
  const response = await fetch(`/api/visits`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function insertHospitalRegion(data) {
  const response = await fetch(`/api/hospital-regions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function getEmergencyDepartments() {
  const response = await fetch(`/api/emergency-departments`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function insertEmergencyDepartment(data) {
  const response = await fetch(`/api/emergency-departments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function getEmergencyPhysicians() {
  const response = await fetch(`/api/emergency-physicians`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function insertEmergencyPhysician(data) {
  const response = await fetch(`/api/emergency-physicians`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function getPatients() {
  const response = await fetch(`/api/patients`);
  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  return await response.json();
}

export async function insertPatient(data) {
  const response = await fetch(`/api/patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function insertTreatment(data) {
  const response = await fetch(`/api/treatments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}

export async function deleteTreatment(data) {
  const response = await fetch(`/api/treatments/${data.treatment_id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const { message } = await response.json();
    alert(message);
    return;
  }

  const { message } = await response.json();
  alert(message);

  return true;
}
