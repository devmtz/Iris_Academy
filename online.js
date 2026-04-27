/**
 * Online Learning Environment Logic
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Authentication Gate Logic ---
  const authGate = document.getElementById('auth-gate');
  const authForm = document.getElementById('auth-form');
  const appWrapper = document.getElementById('app');

  // Simulated Login Process
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate API Call / Validation
    const btn = authForm.querySelector('.cta-button');
    const originalText = btn.textContent;
    btn.innerHTML = 'جاري التحقق...'; // Checking...
    btn.style.opacity = '0.8';
    
    setTimeout(() => {
      // Success!
      authGate.classList.add('hidden');
      appWrapper.classList.remove('blurred');
      
      // Load Actual Content (Simulated)
      loadActualLessons();
    }, 1500); // 1.5s delay for realistic UX feeling
  });


  // --- 2. Skeleton Loaders Generation ---
  const lessonGrid = document.getElementById('lesson-grid');
  
  function renderSkeletons(count = 6) {
    lessonGrid.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const skeletonHTML = `
        <div class="skeleton-card">
          <div class="skeleton-img"></div>
          <div class="skeleton-text badge"></div>
          <div class="skeleton-text"></div>
          <div class="skeleton-text short"></div>
        </div>
      `;
      lessonGrid.insertAdjacentHTML('beforeend', skeletonHTML);
    }
  }

  // Initial Render (Skeletons)
  renderSkeletons(8);

  function loadActualLessons() {
    // This function simulates replacing skeletons with real data from a backend
    setTimeout(() => {
      lessonGrid.innerHTML = '';
      const dummyData = [
        { title: "المعادلات الخطية", badge: "رياضيات", badgeColor: "var(--clr-primary)" },
        { title: "الديناميكا الحرارية", badge: "فيزياء", badgeColor: "var(--clr-accent-pink)" },
        { title: "الزمن الماضي", badge: "الفرنسية", badgeColor: "#87CEFA" },
        { title: "الجهاز التنفسي", badge: "علووم", badgeColor: "#FBE7A1" },
        { title: "التاريخ الإسلامي", badge: "تاريخ", badgeColor: "var(--clr-primary-light)" },
        { title: "البرمجة بلغة بايثون", badge: "إعلامية", badgeColor: "var(--clr-primary-dark)" },
      ];

      dummyData.forEach((lesson, index) => {
        // Create an animated entrance for actual data
        const card = document.createElement('div');
        card.className = 'skeleton-card real-data'; // Reusing structure but removing skeleton classes via CSS overrides or simply structuring similarly.
        
        // Actually, let's build the real card structure
        card.innerHTML = `
          <div style="width: 100%; height: 140px; background-color: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">📚</div>
          <span style="display:inline-block; padding: 4px 12px; border-radius: 99px; background:${lesson.badgeColor}; color: white; font-weight: 600; font-size: 0.8rem; align-self: flex-start;">${lesson.badge}</span>
          <h3 style="color: var(--clr-primary-dark); margin-top: 8px;">${lesson.title}</h3>
          <p style="color: var(--clr-text-light); font-size: 0.9rem;">اضغط هنا لبدء الوحدة ورؤية التفاصيل.</p>
        `;
        
        // A simple fade scale animation
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        card.style.transition = 'all 0.4s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        lessonGrid.appendChild(card);
        
        // Trigger reflow
        void card.offsetWidth;
        
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      });

    }, 1000); // Wait 1 second after Auth modal disappears to swap data
  }


  // --- 3. Sidebar Interaction Logic ---
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const navItems = document.querySelectorAll('.nav-item');

  // Mobile Toggle
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Highlight Active Item
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Remove active from all
      navItems.forEach(nav => nav.classList.remove('active'));
      // Add active to clicked
      e.target.classList.add('active');
      
      // Optional: On mobile, close sidebar after selection
      if(window.innerWidth <= 968) {
        sidebar.classList.remove('active');
      }
      
      // Simulate loading specific category
      renderSkeletons(4);
      loadActualLessons();
    });
  });

  // Accordion auto-close behavior (optional, allowing only one open main details)
  const mainDetails = document.querySelectorAll('.sidebar > .curriculum-nav > details');
  mainDetails.forEach(detail => {
    detail.addEventListener('toggle', (e) => {
      if (detail.open) {
        mainDetails.forEach(otherDetail => {
          if (otherDetail !== detail && otherDetail.open) {
            otherDetail.open = false;
          }
        });
      }
    });
  });

});
