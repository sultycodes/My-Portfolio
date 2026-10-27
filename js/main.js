// ================================================================
// Sultan — Portfolio JavaScript
// Plain vanilla JS. No frameworks, no build step.
// ================================================================

(function () {
  'use strict';

  // ------------------------------------------------------------------
  // PROJECTS DATA — EDIT OR ADD OBJECTS HERE
  // Each object becomes one clickable tile. To add a project, add one
  // object to this array. All tiles and pop-ups are generated below.
  // ------------------------------------------------------------------
  const projects = [
    {
      id: 'p1',
      title: 'Placeholder Project: AI Cost Estimator',
      status: 'Planned',
      shortDescription:
        'Placeholder description: a tool that estimates project costs from uploaded drawings.',
      problem:
        'Placeholder: describe the problem this project solves — e.g. contractors spend hours measuring drawings by hand.',
      built:
        'Placeholder: describe what you built — e.g. an AI pipeline that reads uploaded PDF drawings and returns a cost breakdown.',
      tools: 'Placeholder: Python, LLM APIs',
      demo: '#',
      code: '#'
    },
    {
      id: 'p2',
      title: 'Placeholder Project: Drawing Takeoff Tool',
      status: 'In progress',
      shortDescription:
        'Placeholder description: reads CAD drawings and lists measured quantities.',
      problem:
        'Placeholder: describe the problem — e.g. extracting quantities from AutoCAD files is slow and error-prone.',
      built:
        'Placeholder: describe what you built — e.g. a Python script that parses DWG layers and outputs a bill of quantities.',
      tools: 'Placeholder: AutoCAD, Python',
      demo: '#',
      code: '#'
    },
    {
      id: 'p3',
      title: 'AI quantity takeoff assistant',
      status: 'Planned',
      shortDescription:
        'Placeholder description: reads a drawing or specification and drafts an itemised quantity list.',
      problem:
        'Placeholder: describe the problem — e.g. quantity surveyors manually read drawings and specs to build quantity lists.',
      built:
        'Placeholder: describe what you would build — e.g. an AI assistant that ingests a drawing or spec and produces a structured quantity list.',
      tools: 'Placeholder: Python, OpenCV, LLM APIs',
      demo: '#',
      code: '#'
    }
  ];

  // ------------------------------------------------------------------
  // Render project tiles into the grid
  // ------------------------------------------------------------------
  const grid = document.getElementById('project-grid');

  function renderProjects() {
    grid.innerHTML = projects
      .map(
        (project) => `
      <button class="project-tile" type="button" data-id="${project.id}">
        <h3 class="tile-title">${escapeHtml(project.title)}</h3>
        <p class="tile-desc">${escapeHtml(project.shortDescription)}</p>
        <div class="tile-meta">
          <span class="status-pill">${escapeHtml(project.status)}</span>
          <span class="tile-open">Open</span>
        </div>
      </button>
    `
      )
      .join('');
  }

  // ------------------------------------------------------------------
  // Dialog (pop-up) handling
  // ------------------------------------------------------------------
  const dialog = document.getElementById('project-dialog');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogProblem = document.getElementById('dialog-problem');
  const dialogBuilt = document.getElementById('dialog-built');
  const dialogTools = document.getElementById('dialog-tools');
  const dialogDemo = document.getElementById('dialog-demo');
  const dialogCode = document.getElementById('dialog-code');

  grid.addEventListener('click', (event) => {
    const tile = event.target.closest('.project-tile');
    if (!tile) return;

    const project = projects.find((p) => p.id === tile.dataset.id);
    if (!project) return;

    dialogTitle.textContent = project.title;
    dialogProblem.textContent = project.problem;
    dialogBuilt.textContent = project.built;
    dialogTools.textContent = project.tools;
    dialogDemo.href = project.demo;
    dialogCode.href = project.code;

    dialog.showModal();
  });

  function closeDialog() {
    dialog.close();
  }

  // Close buttons
  dialog.querySelectorAll('.dialog-close, .dialog-close-btn').forEach((button) => {
    button.addEventListener('click', closeDialog);
  });

  // Close when clicking the backdrop (outside the dialog content)
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dialog.open) {
      closeDialog();
    }
  });

  // ------------------------------------------------------------------
  // Helpers
  // ------------------------------------------------------------------
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial render
  renderProjects();
})();